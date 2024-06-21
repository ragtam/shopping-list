export function MainLayout(props: any) {
    return <html>
                <head>
                    <title>Shopping List</title>
                </head>
                <body>
                    { props.children  }
                </body>
           </html>
}