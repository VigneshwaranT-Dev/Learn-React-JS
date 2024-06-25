export function Home(props) {
    const name = props?.name;
    const {native} = props;
    return(
        <>
            <h2>Hi, My Name is {name}, I'm Living in {native}.</h2>
        </>
    );
}

// export default Home;