<template>
  <div class="hello">

    <div id="todo-list-example" class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <h1 class="text-center">Todo list</h1>
                <input type="text" class="form-control" placeholder="Input task" v-model="newTask" @keyup.enter="addTask">
                
                <hr>
                
                <button @click="addTask" class="btn btn-primary">Add Task</button>
                
                <hr>
                
                  <ul class="list-group">
                    <li class="list-group-item" v-for="item in items" :key="item.id">
                      
                      <span> {{ item.name }} </span>  
                    
                      <input type="text" class="form-control form-control-sm" v-model="editTask" v-if="editId === item.id">
    
                      <span v-if="!editId">
                        <button class="btn btn-info float-right" @click="remove(item)">Delete</button>
                        <button class="btn btn-danger float-right" @click="edit(item)">Edit</button>
                      </span>
                      <span v-if="editId === item.id">
                        <button class="btn btn-success float-right" @click="update(item)">Update</button>
                        <button class="btn btn-warning float-right" @click="cancel">Cancel</button>
                      </span>
                  </li>
                </ul> 
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  
    export default {
    data(){
          return {
            newTask:"",
            editTask:"",
            editId:null,

            items: []
          }
        },

        mounted(){
            this.getList()
        },

        methods: {

            async getList() {

                const response = await axios.get('')

                this.items = response.data
            },
            
           async  addTask() {
                
                const payload = {
                    name: this.newTask
                }

                const response = await axios.post('', payload)

                this.items.push({
                })
                this.newTask = '' 

                this.getList ()
            },
            
            async remove(item){
              const response = await axios.delete(`/${item.id}`)

                const index = this.items.indexOf(item)
                this.items.splice(index, 1)
            },

            edit(item){
                this.editId = item.id
                this.editTask = item.name
            },

            async update(item){
                const payload = {
                    id: item.id,
                    name: this.editTask
                }
                const response = await axios.put(`/${item.id}`, payload)
                this.getList()
                this.cancel()
            },

            cancel() {
                this.editId = ''
                this.editTask = ''
            }
        }
      })
</script>