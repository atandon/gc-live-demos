

class Mapper<T> {

    private m : { [s: string] : T } = {};

    add(k : string, v : T) {
        this.m[k] = v;
    }

}

const a = new Mapper<number>();

a.add("test", "hello");