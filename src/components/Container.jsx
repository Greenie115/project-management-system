function Container({ children }) {
    return (
        <>
            <section className="container">
                <div class="flex flex-col h-screen w-4/5 fixed right-0 top-0 bg-transparent justify-center items-center">
                    {children}
                </div>
            </section>
        </>
    )
};

export default Container;
