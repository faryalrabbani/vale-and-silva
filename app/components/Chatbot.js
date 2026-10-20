'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: 'Hello. Welcome to Vale & Silva. How can we help you today?', isBot: true }
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isOpen])

  const handleSend = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    // 1. Add user message to the UI
    const newMessages = [...messages, { text: input, isBot: false }]
    setMessages(newMessages)
    setInput('')

    // 2. Send to our secure backend API
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // Format the messages for the AI
          messages: newMessages.map(m => ({
            role: m.isBot ? 'assistant' : 'user',
            content: m.text
          }))
        })
      })

      const data = await response.json()

      // 3. Add the AI's reply to the UI
      setMessages((prev) => [...prev, { text: data.reply, isBot: true }])
    } catch (error) {
      setMessages((prev) => [
        ...prev, 
        { text: 'Sorry, I am having trouble connecting right now.', isBot: true }
      ])
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-charcoal text-cream rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform duration-300"
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        )}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[380px] h-[500px] bg-cream border border-line shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-charcoal text-cream p-4 flex justify-between items-center">
              <div>
                <p className="font-serif text-lg leading-tight">Studio Concierge</p>
                <p className="text-[0.65rem] tracking-widest uppercase text-cream/60 mt-1">Vale & Silva</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-cream/60 hover:text-cream">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-ivory">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] text-sm leading-relaxed p-3 ${msg.isBot ? 'bg-cream border border-line text-charcoal' : 'bg-charcoal text-cream'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 border-t border-line bg-cream flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-transparent text-sm text-charcoal focus:outline-none placeholder:text-stone/50 py-2 px-2"
              />
              <button type="submit" className="text-charcoal hover:text-accent transition-colors p-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}