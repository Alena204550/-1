<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width= , initial-scale=1.0">
  <title>Хуки</title>
</head>
<body>
    <div id="app"></div>
    <div id="app2"></div>
        
   <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> 
    <script type="text/babel">
        function App() {
            const [count, setCount] = React.useState(0);
 
            return (
                <div>
                  <p>Вы кликнули {count} раз</p>
                  <button onClick={() => setCount(count + 1)}>
                    Нажми на меня
                  </button>
                </div>
            );
        }

        ReactDOM.render(
           <App />,
           document.getElementById("app")
        )
    </script>
</body>
</html>