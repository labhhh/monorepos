import { sum } from "@monorepo/utils/math/sum";

import Text from "@monorepo/design-system/components/Text";

export default function HomeScreen() {
    return (
        <main>
            <h1> Home </h1>
            <p>{sum(2, 2)}</p>
            <Text tag="h1">Novo texto</Text>
        </main>
    );
}
