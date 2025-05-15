import Component from '../components/component.11ty.jsx'

export default function(data) {
	return (<>
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>TITLE</title>
			</head>
			<body>
				<Component name='foo' />

				{data.content}
			</body>
		</html>
	</>)
}
