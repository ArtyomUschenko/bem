import Button from "@/pages/Button";

const Example = () => {
    return (
        <>
            <h1 className="text-center">
                Hello World<br/>
                <mark>Test</mark>
            </h1>
            <Button label= {<span>Кнопка <b>#1</b></span>}/>
            <Button mode="light"/>

            <Button>
                <span>Кнопка <b>#2</b></span>
            </Button>
            <h2>Test h2</h2>
        </>
    )
}

export default Example