const ResultedItems = (props) => {
    return (
        <div className="px-4 py-2 capitalize text-xl  rounded-lg bg-white ">{`${props.name} (${props.age})`}</div>
    );
};

export default ResultedItems;