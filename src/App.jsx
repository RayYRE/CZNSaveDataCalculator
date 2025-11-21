import { useState } from 'react'
import './App.css'
import CharPanel from "./assets/components/CharPanel"; 
import TierBox from './assets/components/TierBox';

/*
    CZN Calculator by Ray Ern
    Neutral cards = 20
    Neutral + Epiphany = 30
    Forbidden (Season) = 20 
    Monster = 80 (no neutral tax)
    Copy = 0/10/30/50/70
    Remove = 0/10/30/50/70 + 20 (base 8)
    Divine = 20
    Convert = 10 
*/

function App() {
  const [char1_values, setChar1Values] = useState(Array(10).fill(0));
  const [char2_values, setChar2Values] = useState(Array(10).fill(0));
  const [char3_values, setChar3Values] = useState(Array(10).fill(0));
  const [tier, setTier] = useState(1);

  const P1 = 1;
  const P2 = 2;
  const P3 = 3;

  function increment(character, datarow){
    var new_state
    if (character == 1){
      new_state = char1_values.slice();
      new_state[datarow]++;
      setChar1Values(new_state);
    }
    else if (character == 2){
      new_state = char2_values.slice();
      new_state[datarow]++;
      setChar2Values(new_state);
    }
    else {
      new_state = char3_values.slice();
      new_state[datarow]++;
      setChar3Values(new_state);
    }
  };

  function decrement(character, datarow){
    var new_state
    if (character == 1){
      if (char1_values[datarow] == 0){
        return
      }
      new_state = char1_values.slice();
      new_state[datarow]--;
      setChar1Values(new_state);
    }
    else if (character == 2){
      if (char2_values[datarow] == 0){
        return
      }
      new_state = char2_values.slice();
      new_state[datarow]--;
      setChar2Values(new_state);
    }
    else {
      if (char3_values[datarow] == 0){
        return
      }
      new_state = char3_values.slice();
      new_state[datarow]--;
      setChar3Values(new_state);
    }
  };
  
  return (
    <body>
      <h1>CZN Save Data Calculator</h1>
      <div class="panelcontainer">
        <TierBox
          current_tier={tier}
          onIncrement={() => setTier(tier + 1)}
          onDecrement={(row) => setTier(tier - 1)}/>
      </div>
      <div class="panelcontainer">
        
        <CharPanel
          values={char1_values}
          current_tier={tier}
          onIncrement={(row) => increment(P1, row)}
          onDecrement={(row) => decrement(P1, row)}
        />
        <CharPanel
          values={char2_values}
          current_tier={tier}
          onIncrement={(row) => increment(P2, row)}
          onDecrement={(row) => decrement(P2, row)}
        />
        <CharPanel
          values={char3_values}
          current_tier={tier}
          onIncrement={(row) => increment(P3, row)}
          onDecrement={(row) => decrement(P3, row)}
        />
      </div>
      
    </body>
  )
}

export default App
