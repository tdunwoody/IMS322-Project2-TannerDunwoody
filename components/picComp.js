app.component("component1", {

    template:
    /*html*/
    `
    <div>
        <ul>
            <li v-for="dog in dogs" v-on:mouseover="emitDog(dog)">{{ dog }}</li>
        </ul>
    </div>
    `,
    
    data: function() {  // Pass an object into the app with options and initial data
        return {
            dogs: ["Dog1", "Dog2", "Dog3"]
        }
    },
    
    methods: {          // Your custom functions go here
        emitDog(d) {
            this.$emit("dog-update", d)
        }
    },
    
    computed: {         // Computed values go here

    }
})