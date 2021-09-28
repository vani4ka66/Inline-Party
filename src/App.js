

function App() {
  return (
    <div className="App">
      <div className="wrapper"  style={{display: 'flex', justifyContent: 'space-between', margin: 1+'rem', paddingBottom: 1+'rem', borderBottom:  1+'px' + 'solid #ccc' }}>
        <h3 className="mealHeading" style={{margin: 0+0+0.25+'rem'+0}}>Sushi</h3>
        <div className="description" style={{fontStyle: "italic"}}>I prefer steak than sushi.</div>
        <div className="price" style={{ marginTop: 0.25+'rem',fontWeight: 'bold',color: '#ad5502',fontSize: 1.25+'rem'}}>$9.99</div>
      </div>
    </div>
  );
}

export default App;
