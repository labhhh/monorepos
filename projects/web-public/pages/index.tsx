import {sum} from "@monorepo/utils/math/sum";

export default function HomeScreen(){ 
    return (
        <main>
            <h1> Home </h1>
            <p>{sum(2,2)}</p>
        </main>
    )
}