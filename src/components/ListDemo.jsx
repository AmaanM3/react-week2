function MemberTable({ members }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>

            <tbody>
                {members.map(member => (
                    <tr key={member.id}>
                        <td>{member.name}</td>
                        <td>{member.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

function ListDemo() {
    const members = [
        { id: 1, name: "Peter", age: 18 },
        { id: 2, name: "Hanne", age: 35 },
        { id: 3, name: "Janne", age: 25 },
        { id: 4, name: "Holger", age: 22 }
    ];

    return (
        <div>
            <h2>Opgave 2: Lists and Keys</h2>
            <MemberTable members={members} />
        </div>
    );
}

export default ListDemo;