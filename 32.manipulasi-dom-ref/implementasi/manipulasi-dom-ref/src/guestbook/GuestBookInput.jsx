function GuestBookInput({ name, setName, ref }) {
    return (
        <>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" ref={ref} name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </>
    );
}

export { GuestBookInput };