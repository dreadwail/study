fn main() {
    println!("Hello, world!");

    assignment();
    conditionals();
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
