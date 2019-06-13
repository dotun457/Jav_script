struct = {
	name: "kanye",
	age: 5,
	make_string: function(){
		return this.name + this.age;
	}
};


struct.string = struct.make_string();
console.log(struct);
