class Repository {
    constructor(model) {
        this.model = model;
        this.notFound = "Nothing found ";
    }

    save(obj) {
        return this.model.insert(obj);
    }

    all() {
        return this.model.find();
    }

    show(id) {
        return this.model.findOne({$loki: id});
    }

    update(obj) {
        return this.model.update(obj);
    }

    delete(id) {
        const result = this.model.findOne({$loki: id});
        this.model.remove(result);
        return {
            message: "Resource was deleted"
        }
    }
}

module.exports = Repository;
