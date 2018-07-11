import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component {
    createTasks = item => (
        <li onClick={() => this.delete(item.key)} key={item.key}>
            {item.text}
        </li>
    );

    delete = key => {
        console.log("Key is: " + key);
        this.props.delete(key);
    };

    render() {
        const todoEntries = this.props.entries;
        const listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                <FlipMove duration={150} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
}

export default TodoItems;
