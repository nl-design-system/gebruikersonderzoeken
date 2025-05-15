export type ComponentProps = {
	name: string
}

export default function(data: ComponentProps) {
	return <p>A very component {data.name}</p>
}
