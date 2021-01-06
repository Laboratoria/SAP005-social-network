
export const Timeline = () => {
    const rootElement = document.createElement("main");
    const timelineContainer = `
    <header>
        <div class="container-tml">
    <h1>coletivo</h1>
    </header>
    <main>
        <section class="userHandle">
        </section>  
    </main>
</div>
`
rootElement.innerHTML = timelineContainer;
    return rootElement
}