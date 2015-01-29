fn main() {
    println!("Hello, world!");

    assignment();
    conditionals();
    functions();
    tuples();
}

fn assignment() {
    let a = 42;
    println!("a = {}", a);

    let (x, y) = (1, 2);
    println!("x and y: {}, {}", x, y);

    let explicitly_typed: i32 = 5;
    println!("explicitly_typed: {}", explicitly_typed);

    // This wont work
    // let immutable = 100;
    // immutable = 200;
    // println!("immutable: {}", immutable);

    let mut mutable = 50;
    println!("mutable before: {}", mutable);
    mutable = 60;
    println!("mutable after: {}", mutable);

    // This wont work
    // let uninitialized: i32;
    // println!("uninitialized: {}", uninitialized);
}

fn conditionals() {
    let x = 42;
    if x < 50 {
        println!("{} was less than 50", x);
    } else {
        println!("{} was not less than 50", x);
    }

    // :-S  Not sure I like this syntax. I probably wont use it much.
    let y = if x < 100 { x } else { 3000 };
    println!("y = {}", y);

}

fn functions() {
    foo_func(10, 20);
    let answer = add_one(41);
    println!("answer from add_one: {}", answer);

    println!("42 floored at 100: {}", floor_at_hundred(42));
    println!("150 floored at 100: {}", floor_at_hundred(150));
}

fn foo_func(x: i32, y: i32) {
    println!("foo_func's x = {}", x);
    println!("foo_func's y = {}", y);
}

fn add_one(x: i32) -> i32 {
    x + 1
}

fn floor_at_hundred(x: i32) -> i32 {
    if x < 100 {
        return 100;
    }
    return x;
}

fn tuples() {
    let inference = (10, "20");
    println!("inference: ({}, {})", inference.0, inference.1);
    let explicit: (i32, &str) = (30, "40");
    println!("explicit: ({}, {})", explicit.0, explicit.1);
}
