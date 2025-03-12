// Q) What is difference between LocalStorage and SessionStorage?

// A) LocalStorage and SessionStorage are two types of web storage that allow you to store data in the browser.
//    The main difference between LocalStorage and SessionStorage is that LocalStorage stores data with no expiration date,
//    while SessionStorage stores data for one session (data is lost when the browser tab is closed). Both LocalStorage and
//    SessionStorage are properties of the Window object, which means you can access them using window.localStorage and
//    window.sessionStorage. Capacity of both LocalStorage and SessionStorage is 5MB per domain.
//    Both LocalStorage and SessionStorage have the same methods and properties. You can use setItem(), getItem(), removeItem(),
//    and clear() to store, retrieve, remove, and clear data in both LocalStorage and SessionStorage.

//    Example 1:
//    // Store data in LocalStorage
//    window.localStorage.setItem('name', 'Vishnu');
//    // Retrieve data from LocalStorage
//    console.log(window.localStorage.getItem('name'));   // o/p: Vishnu

//    Example 2:
//    // Store data in SessionStorage
//    window.sessionStorage.setItem('name', 'Vishnu');
//    // Retrieve data from SessionStorage
//    console.log(window.sessionStorage.getItem('name'));   // o/p: Vishnu

//    In example 1, we store the data 'Vishnu' in LocalStorage using window.localStorage.setItem(). We then retrieve the data
//    using window.localStorage.getItem() and log it to the console. In example 2, we do the same thing but with SessionStorage.
//    The main difference is that data stored in LocalStorage persists even after the browser is closed and reopened, while data
//    stored in SessionStorage is lost when the browser tab is closed.
