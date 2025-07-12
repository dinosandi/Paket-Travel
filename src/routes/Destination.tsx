import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Destination')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Destination"!</div>
}
