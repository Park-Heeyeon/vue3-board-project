export default {
  install(app) {
    const person = {
      name: 'heeyeon',
      say() {
        alert(this.name);
      }
    };
    app.config.globalProperties.$person = person;
    app.provide('person', person);
  }
};
