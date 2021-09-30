import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    const json = jsonfile.readFile("./contacts.json");
    json.then(res=> this.data = res);
    json.catch(err=>console.log(err))
    return json
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
   const write = jsonfile.writeFile("./contacts.json", this.data);
   write.then(()=>console.log("Cambios Guardados"));
   write.catch((err)=>console.log(err));
  }
  getOneById(id) {
    const encontrado = this.data.find((contacto) => {
      if (contacto.id == id) {
        return true;
      }
    });

    return encontrado;
  }
}
export { ContactsCollection, Contact };
