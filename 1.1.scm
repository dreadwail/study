; prefix notation (operator operands)

(+ 10 5)

; naming variables

(define number 42)

(define multiplied (* 100 (+ 10 number)))

multiplied

; procedure definition

(define (square x) (* x x))

(square 10)

(square (square 10))

; cond

(define (abs x)
  (cond ((> x 0) x)
        ((= x 0) 0)
        ((< x 0) (- x))))

(abs -4)
(abs 0)
(abs 4)

; else

(define (abs x)
  (cond ((< x 0) (- x))
        (else x)))

(abs -4)
(abs 0)
(abs 4)

; if

(define (abs x)
  (if (< x 0) (- x) x))

(abs -4)
(abs 0)
(abs 4)

; and

(define (inside-ten x)
  (and (> x (- 1)) (< x 11)))

(inside-ten 5)
(inside-ten 15)

; or

(define (two-four-six x)
  (or (= x 2) (= x 4) (= x 6)))

(two-four-six 1)
(two-four-six 2)
(two-four-six 3)
(two-four-six 4)
(two-four-six 5)
(two-four-six 6)
(two-four-six 7)

; not

(define (answer-to-life-the-universe-and-everything x)
  (and (not (< x 42)) (not (> x 42))))

(answer-to-life-the-universe-and-everything 41)
(answer-to-life-the-universe-and-everything 42)
(answer-to-life-the-universe-and-everything 43)

; exercise 1.1

(assert (= 10 10))
(assert (= 12 (+ 5 3 4)))
(assert (= 8 (- 9 1)))
(assert (= 3 (/ 6 2)))
(assert (= 6 (+ (* 2 4) (- 4 6))))

(define a 3)

(assert (= 3 a))

(define b (+ a 1))

(assert (= 4 b))
(assert (= 19 (+ a b (* a b))))
(assert (= 4 (if (and (> b a) (< b (* a b)))
              b
              a)))
(assert (= 16 (cond ((= a 4) 6)
                    ((= b 4) (+ 6 7 a))
                    (else 25))))
(assert (= 6 (+ 2 (if (> b a) b a))))
(assert (= 16 (* (cond ((> a b) a)
                       ((< a b) b)
                       (else -1))
                 (+ a 1))))

; exercise 1.2

(/ (+ 5 4 (- 2 (- 3 (+ 6 (/ 4 5)))))
   (* 3 (- 6 2)(- 2 7)))

; exercise 1.3

(define (sum-of-squares a b)
  (+ (* a a) (* b b)))

(define (sum-two-largest-squares a b c)
  (cond ((and (> b a) (> c a)) (sum-of-squares b c))
        ((and (> a b) (> c b)) (sum-of-squares a c))
        ((and (> a c) (> b c)) (sum-of-squares a b))))

(assert (= (+ 16 36) (sum-two-largest-squares 2 4 6)))
(assert (= (+ 16 36) (sum-two-largest-squares 4 2 6)))
(assert (= (+ 16 36) (sum-two-largest-squares 4 6 2)))

; exercise 1.4
;
; if b is positive then the operator used against 'a' and 'b' will be '+' (+ a b) otherwise it will be '-' (- a b)
; the program modifies itself based upon the inputs through the condition
(define (a-plus-abs-b a b)
  ((if (> b 0) + -) a b))

; exercise 1.5

(define (p) (p))

(define (test x y)
  (if (= x 0)
      0
      y))

;(test 0 (p))  ; would infinitely recurse so i've commented it out

; applicative-order evaluation (immediate apply):

; 1; (test 0 (p)) ; 0 is 0,  evaluating (p) results in itself (p)
; 2; (test 0 (p)) ; back where we started, so infinitely recurse from here

; normal-order evaluation (fully expand delayed apply):

; 1; (test 0 (p)) ; expand 'test'
; 2; (if (= 0 0)  ; 'if' does not expand, so evaluate it. (= 0 0) is true so evaluate first arg
;        0        ; condition was true so evaluate this arg
;        (p))     ; never worry about this arg because the condition was true
;
; applicative-order will infinitely try and evaluate (p)
; normal-order will never attempt to evaluate (p) because the 'if' short-circuited us from getting there


; exercise 1.5

(define (average x y)
  (/ (+ x y) 2))

(define (improve guess number)
  (average guess (/ number guess)))

(define (good-enough? guess number)
  (< (abs (- number (* guess guess))) 0.001))

(define (sqr-root-iter guess number)
  (if (good-enough? guess number)
      guess
      (sqr-root-iter (improve guess number) number)))

(define (sqr-root-of x)
  (sqr-root-iter 1.0 x))

(sqr-root-of 9)


; exercise 1.6

; new-if defined using cond
(define (new-if predicate then-clause else-clause)
  (cond (predicate then-clause)
        (else else-clause)))

; same sq-root-iter exercise from before but implemented via new-if

(define (new-if-sqr-root-iter guess number)
  (new-if (good-enough? guess number)
          guess
          (new-if-sqr-root-iter (improve guess number) number)))

(define (new-if-sqr-root-of x)
  (new-if-sqr-root-iter 1.0 x))

; unfortunately executing it results in infinite recursion because unlike 'if' which is a special short-circuiting
; form, new-if uses normal evaluation of both branches

; commented-out to avoid the infinite recursion
; (new-if-sqr-root-of 9)


; exercise 1.7

; I'm skipping this exercise because I'm aware of floating point issues and solving this would be of low value.


; exercise 1.8

; Cube-root in similar fashion to previous sqr-root calculations

(define (improve guess number)
  (/ (+ (/ number (* guess guess)) (* 2 guess)) 3))

(define (good-enough? guess number)
  (< (abs (- number (* guess guess guess))) 0.001))

(define (cube-root-iter guess number)
  (if (good-enough? guess number)
      guess
      (cube-root-iter (improve guess number) number)))

(define (cube-root-of x)
  (cube-root-iter 1.0 x))

(cube-root-of 27)
