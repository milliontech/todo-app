<style scoped>
.complete {
    color: gray;
}
</style>

<template>
    <div class="demo">
        <div class="px-3 max-w-md mx-auto">
            <div class="bg-white rounded shadow px-4 py-4 m-4">
                <div class="title font-bold text-lg">Todo List</div>
                <input type="text" placeholder="What is your plan?"
                    class="rounded-sm shadow-sm px-4 py-2 border border-gray-200 w-full mt-4"
                    v-model="title" @keydown.enter="addTodo">
                <ul class="mt-4">
                    <li class="flex justify-between items-center mt-3"
                        v-for="todo in todos" :key="todo.id">
                        <div class="flex items-center"
                            :class="{ 'line-through complete' : todo.isComplete }">
                            <input type="checkbox" v-model="todo.isComplete" />
                            <div class="capitalize ml-3 text-left">
                                <p class="text-sm font-semibold" v-text="todo.title"></p>
                                <p class="text-xs italic text-gray-400">{{ todo.createTs | format }}</p>
                            </div>
                        </div>
                        <div>
                            <button @click="deleteTodo(todo)">
                                <svg class=" w-4 h-4 text-gray-600 fill-current" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: "demo",
    data: () => ({
        title: null,
        todos: [
            {
                id: 1,
                title: "this my first task",
                createTs: new Date(),
                isComplete: false
            }
        ]
    }),
    created() {
        this.todos = this.$store.getters.getTodos || [];
    },
    updated() {
        this.$store.dispatch('updateTodos', this.todos);
    },
    methods: {
        addTodo(event) {
            console.log(event.target);
            var nextId = this.todos && this.todos.length
                ? Math.max.apply(this, this.todos.map(o => o.id), 1) + 1
                : 1;
            console.log(nextId);
            this.todos.push({
                id: nextId,
                title: this.title,
                createTs: new Date(),
                isComplete: false
            });
            this.title = null;
            this.$store.dispatch('updateTodos', this.todos);
        },
        deleteTodo(todo) {
            this.todos = this.todos.filter(o => o.id !== todo.id);
            this.$store.dispatch('updateTodos', this.todos);
        }
    }
};
</script>
