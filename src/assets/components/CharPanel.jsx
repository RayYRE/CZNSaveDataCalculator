export default function CharPanel({values, onIncrement, onDecrement}) {
  console.log(values)
  const COST = 10
  const COPY = 0
  const REMOVE = 1
  const REMBASIC = 2
  const CONVERT = 3
  const NCARDS = 4
  const NEPI = 5
  const NDIV = 6
  const SCARDS = 7
  const MCARDS = 8
  const MDIV = 9
  
  var tier = 1
  var cost_limit = limitCalc()

  function limitCalc(){
    return tier * 10 + 20
  }

  function copyCalc(num) {
    
    if (num >= 2) {
      return (num - 2) * 20 + 10;
    }
    else {
      return 0;
    }
  }

  function remBasic(num){
    if (num == 0){
      return 0;
    }
    
    return copyCalc(num) + 20 * num;
  }
  
  return (
    <div class="box"> 
      <div class="innerbox">
        <h3>
          Deck Modifying
        </h3>
        <div class="row">
          <div>{values[COPY]} Copy</div>
          <div class="cost">{copyCalc(values[COPY])}</div>
          <button class="plus" onClick={() => {
            onIncrement(COPY);
          }}>+</button>
          <button class="minus" onClick={() => {
            onDecrement(COPY);
          }}>-</button>

        </div>
        <div class="row">
          <div>{values[REMOVE]} Remove</div>
          <div class="cost">{copyCalc(values[REMOVE])}</div>
          <button class="plus" onClick={() => {
            onIncrement(REMOVE);
          }}>+</button>
          <button class="minus" onClick={() => {
            onDecrement(REMOVE);
          }}>-</button>
        </div>
        <div class="row">
          <div>{values[REMBASIC]} Remove Basic</div>
          <div class="cost">{remBasic(values[REMBASIC])}</div>
          <button class="plus" onClick={() => {
            onIncrement(REMBASIC);
          }}>+</button>
          <button class="minus" onClick={() => {
            onDecrement(REMBASIC);
          }}>-</button>
        </div>
        <div class="row">
          <div>{values[CONVERT]} Convert</div>
          <div class="cost">{values[CONVERT] * 10}</div>
          <button class="plus" onClick={() => {
            onIncrement(CONVERT);
          }}>+</button>
          <button class="minus" onClick={() => {
            onDecrement(CONVERT);
          }}>-</button>
        </div>
      </div>

      <div class="innerbox">
        <h3>
            Neutral Cards
        </h3>
        <div class="row">
          <div>{values[NCARDS]} Cards</div>
          <div class="cost">{values[NCARDS] * 20}</div>
          <button class="plus" onClick={() => {
            onIncrement(NCARDS);
          }}>+</button>
          <button class="minus" onClick={() => {
            onDecrement(NCARDS);
          }}>-</button>
        </div>
        <div class="row">
          <div>{values[NEPI]} Epiphany</div>
          <div class="cost">{values[NEPI] * 10}</div>
          <button class="plus" onClick={() => {
            onIncrement(NEPI);
          }}>+</button>
          <button class="minus" onClick={() => {
            onDecrement(NEPI);
          }}>-</button>
        </div>
        <div class="row">
          <div>{values[NDIV]} Divine Epiphany</div>
          <div class="cost">{values[NDIV] * 30}</div>
          <button class="plus" onClick={() => {
            onIncrement(NDIV);
          }}>+</button>
          <button class="minus" onClick={() => {
            onDecrement(NDIV);
          }}>-</button>
        </div>
      </div>
      <div class="innerbox">
        <h3>
            Seasonal Cards
        </h3>
        <div class="row">
          <div>{values[SCARDS]} Forbidden Cards</div>
          <div class="cost">{values[SCARDS] * 20}</div>
          <button class="plus" onClick={() => {
            onIncrement(SCARDS);
          }}>+</button>
          <button class="minus" onClick={() => {
            onDecrement(SCARDS);
          }}>-</button>
        </div>
      </div>
      <div class="innerbox">  
        <h3>
            Monster Cards
        </h3>
        <div class="row">
          <div>{values[MCARDS]} Cards</div>
          <div class="cost">{values[MCARDS] * 80}</div>
          <button class="plus" onClick={() => {
            onIncrement(MCARDS);
          }}>+</button>
          <button class="minus" onClick={() => {
            onDecrement(MCARDS);
          }}>-</button>
        </div>
        <div class="row">
          <div>{values[MDIV]} Divine Epiphany</div>
          <div class="cost">{values[MDIV] * 20}</div>
          <button class="plus" onClick={() => {
            onIncrement(MDIV);
          }}>+</button>
          <button class="minus" onClick={() => {
            onDecrement(MDIV);
          }}>-</button>
        </div>
      </div>
    </div>
  );
}
