; exercise 1.9

(define (inc a)
  (+ a 1))

(define (dec a)
  (- a 1))

; i changed the names of the following methods so that I could actually run them in my scheme interpreter.
; without changing their names it would infinitely recurse with (+) being redefined

; this version is recursive because it builds up deferred operations of (inc) as it descends
(define (add a b)
  (if (= a 0)
    b
    (inc (+ (dec a) b))))

; this version is iterative because there are no deferred operations each time it recurses (+ a b)
(define (add a b)
  (if (= a 0)
    b
    (+ (dec a) (inc b))))


(add 2 2)

; exercise 1.10

; i skipped this problem because it is too mathy and low value in my opinion

; exercise 1.11


