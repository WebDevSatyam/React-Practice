/* What is React and it's uses...
// A JS library for building user interfaces
// React makes building complex, interactive and reactive user interfaces simpler.
// We use it for giving smooth transitions between pages of website without being reload and opening a new tab also throughout the whole page.
*/

/* Why React 
// It's more dynamic and readable and includes more advanced features than vanilla.js
// With React we can do Declarative UI Progamming i.e. when working with react you end up writing declarative code which explains as define the goals, not the steps..whereas in vanilla.js we write imperative code which explains as write the steps, not the goal.
*/

/*OBJECTIVE
// Fundamentals of React concepts like components, JSX, props, state, events, styling components,hooks, debugging etc.
*/

/*Build Process */
// Raw, unprocessed React code won't execute in the browser
// i.e. JSX is not a default JS feature
// React projects requires a build process that transforms your code to a JS file and automatically import it in the main index file.

/* React start */

/* Component-Driven User Interfaces */
// Building Interactive and Scalable UIs
// React Core syntax and JSX
// Working with Components
// Working with Data

/* Components: React is all about COMPONENTS.
    // components are reusable building blocks in your user interface.
    // components are a combination of html code, css code and some javascript code.
    
    // why components?
        // reusabilty
        // separating of concerns
    
    // Declarative Approach: define the desired target state(s) and let React figure out the actual JS DOM instructions.

    //IMP: a component in React is just a JS fucntion

    // You can export the component and use it as a custom html tag to render that component where u import it.

    // Types of Components:
        1.Controlled Component : Both values as well as changes to the value are not handled by the component itself but in the parent component
        2.Stateless/ Dumb/ Presentaional Component: Component which don't manage any state inside it, which are just there to present some data.
    */

/* Props: also known as properties
    props are one of the methods to pass the data to the our components to make them configurable and reusable.

    // 1st approach:
        we retrieve data from customized tags
        i.e.
            const expenses = [
            {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2020, 7, 14),
            }]
        
            <ExpenseItem
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
            ></ExpenseItem>
        the above code is from app.js

        now, 
        function ExpenseItem(props) {
            return (
                <div className="expense-item">
                <div>{props.date.toISOString()}</div>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                </div>
            );
        }
        
        this is the case when we get data from expenses and use it in our ExpenseItem fucntion using props

    // 2nd Approach:
            without getting individual item we get the whole data set
            i.e. 
                const expenses = [
            {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2020, 7, 14),
            }]
        
            <ExpenseItem
                expense = {expenses[0]}
            ></ExpenseItem>
        the above code is from app.js

        now, 
        function ExpenseItem(props) {
            return (
                <div className="expense-item">
                <div>{props.expense.date.toISOString()}</div>
                <div className="expense-item__description">
                    <h2>{props.expense.title}</h2>
                    <div className="expense-item__price">${props.expense.amount}</div>
                </div>
                </div>
            );
        }

    // 3rd approach
        we can use object destructuring as well
        i.e. 
            const expenses = [
            {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2020, 7, 14),
            }]
        
            <ExpenseItem
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
            ></ExpenseItem>
        the above code is from app.js

        now, 
        function ExpenseItem({data,title,amount}) {
            return (
                <div className="expense-item">
                <div>{date.toISOString()}</div>
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${amount}</div>
                </div>
                </div>
            );
        }
*/

// React keeps calling any component functions which encounters in JSX, then calls any functions that those functions might have returned until there are no more functions left.

/* State:
        Concept in which we can say, we have to say to react that something changed and that a certain component should be re-valuated.
    
        'useState': this is a function provided by the React library which allows us to define values as state where changes to these values should reflect in component function we wanna call again.
                    useState is a so callled React Hook.
            
            use: first import it in the component file
                 then call it in the component function only
                 don't call it in nested function or any other place
                 it return array only of two elements

                 const [pointer at old value, pointer at new value]=useState(old value);
                 i.e. const [title,setTitle] = useState(props.title);
                 and then call it in function block of the function which is called to update the value
                 i.e. setTitle(new value);
    
        calling this function will not just assign it a new value but it's managed by React somewhere is memory. 
        and when we call this state updating function the special variable will not only get new value but the whole component function will be executed again.
*/
