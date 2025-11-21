export default function TierBox({current_tier, onIncrement, onDecrement}) {
    function currentTier(){
        return current_tier * 10 + 20;
    }

    return (
        <div class="tierbox">
            <div class="row">
                <div class="th">
                    TIER {current_tier} 
                </div>
                
                <button class="tplus" onClick = {() => {
                    onIncrement();
                }}>+
                </button>
                <button class="minus" onClick = {() => {
                    if (current_tier > 1){
                        onDecrement();
                    }
                }}>
                    -
                </button>

            </div>


        </div>
    )
}