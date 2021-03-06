fn main() {
    println!("Hello, world!");

    assignment();
    conditionals();
    functions();
    tuples();
    structs();
    enums();
}

fn section_label(name: &str) {
    println!("\n####################\n# {}\n####################\n", name);
}

fn assignment() {
    section_label("ASSIGNMENT");

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
    section_label("CONDITIONALS");

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
    section_label("FUNCTIONS");

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
    section_label("TUPLES");

    let inference = (10, "20");
    println!("inference: ({}, {})", inference.0, inference.1);

    let explicit: (i32, &str) = (30, "40");
    println!("explicit: ({}, {})", explicit.0, explicit.1);

    let another_inference = (10, "20");

    if inference == another_inference {
        println!("inferences are the same");
    } else {
        println!("inferences are different");
    }
}

fn structs() {
    section_label("STRUCTS");

    struct Point {
        x: i32,
        y: i32
    }

    let coordinate = Point { x: 10, y: 20 };
    println!("coordinate is at ({}, {})", coordinate.x, coordinate.y);

    // This wont work because the coordinate is immutable
    // coordinate.x = 42;

    let mut mutable_coordinate = Point { x: 10, y: 20 };
    mutable_coordinate.x = 30;
    println!("mutable_coordinate is at ({}, {})", mutable_coordinate.x, mutable_coordinate.y);

    struct Color(i32, i32, i32);

    let tuple_struct = Color(255, 255, 255);
    let first  = match tuple_struct { Color(x, _, _) => x };
    let second = match tuple_struct { Color(_, y, _) => y };
    let third  = match tuple_struct { Color(_, _, z) => z };
    println!("tuple struct: ({}, {}, {})", first, second, third);

    // Pattern match destructuring
    struct Age(i32);
    let age_instance = Age(30);
    let Age(destructured_age_value) = age_instance;
    println!("The destructured age value: {}", destructured_age_value);
}

use std::cmp::Ordering;

fn enums() {
    section_label("ENUMS");

    enum Foo {
        One,
        Two
    }

    let comp = Ordering::Less;
    if comp == Ordering::Less {
        println!("yep");
    } else {
        println!("nope");
    }
}
