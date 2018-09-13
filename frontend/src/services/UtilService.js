function store(key, any) {
    localStorage[key] = JSON.stringify(any);

}

function load(key) {
   var str = localStorage.getItem(key)
   return (str) ? JSON.parse(str) : null;
}

export default {
   store,
   load
}