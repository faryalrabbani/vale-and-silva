import { getProjectBySlug } from '../../../lib/projects'

export async function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug)
  
  if (!project) {
    return { title: 'Project Not Found' }
  }

  return {
    title: project.title,
    description: project.excerpt,
  }
}

export default function ProjectLayout({ children }) {
  return children
}