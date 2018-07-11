import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
    state = {
        items: [],
        listItemValue: ""
    };

    handleInputChange = event => {
        this.setState({ listItemValue: event.target.value });
    };

    addItem = e => {
        e.preventDefault();

        const { listItemValue, items } = this.state;
        if (listItemValue !== "") {
            const newItem = {
                text: listItemValue,
                key: Date.now()
            };

            this.setState(prevState => ({
                items: [...prevState.items, newItem],
                listItemValue: ""
            })).then(() => {
                console.log(`Items: `, items);
            });
        }
    };

    deleteItem = key => {
        console.log("Key in deleteItem: " + key);
        const filteredItems = this.state.items.filter(item => item.key !== key);

        this.setState({ items: filteredItems });
    };

    render() {
        const { listItemValue, items } = this.state;
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input
                            value={listItemValue}
                            onChange={this.handleInputChange}
                            placeholder="enter task"
                        />
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={items} delete={this.deleteItem} />
            </div>
        );
    }
}

export default TodoList;
