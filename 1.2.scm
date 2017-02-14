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

; recursive-process:

(define (recursive-process n)
  (if (< n 3)
      n
      (+ (recursive-process (- n 1))
         (* 2 (recursive-process (- n 2)))
         (* 3 (recursive-process (- n 3))))))

(recursive-process 5)

; illustrated:
; ---------------------------

; (recursive-process 5)

; ---------------------------

;    (+ (recursive-process 4)
;       (* 2 (recursive-process 3))
;       (* 3 (recursive-process 2)))

; ---------------------------

;    (+ (
;          (+ (recursive-process 3)
;             (* 2 (recursive-process 2))
;             (* 3 (recursive-process 1)))
;       )
;       (* 2 (
;                (+ (recursive-process 2)
;                   (* 2 (recursive-process 1))
;                   (* 3 (recursive-process 0)))
;
;             ))
;       (* 3 2))

; ---------------------------

;    (+ (
;          (+ (
;                (+ (2)
;                   (* 2 1)
;                   (* 3 0)))
;             (* 2 2)
;             (* 3 1))
;       )
;       (* 2 (
;                (+ 2
;                   (* 2 1)
;                   (* 3 0))
;
;             ))
;       (* 3 2))

; ---------------------------

;    (+ (11)
;       (8)
;       (6))

;    (25)

(assert (= 25 (recursive-process 5)))

; iterative-process:
; I found this tremendously difficult to do...

(define (iterative-process start)
  (define (iter a b c index)
    (define (new-a) (+ (* 1 a)
                       (* 2 b)
                       (* 3 c)))
    (if (< index 3)
        a
        (iter (new-a) a b (- index 1))))    ; scoot along by shifting each value over and calc new

  (iter 2 1 0 start))

; illustrated
; ---------------------
; (iterative-process 5)
; ----------------------
; (iter 2 1 0 5)
; ---------------------
; (if (< 5 3)
;     2
;     (iter (+ (* 1 2)
;              (* 2 1)
;              (* 3 0))
;           2
;           1
;           (- 5 1))))
; ---------------------
; (iter (+ (2)(2)(0))
;       2
;       1
;       4)))
; ---------------------
; (iter 4 2 1 4)
; ---------------------
; (if (< 4 3)
;     2
;     (iter (+ (* 1 4)
;              (* 2 2)
;              (* 3 1))
;           4
;           2
;           4 - 1))
; ---------------------
; (iter (+ (4) (4) (3))
;       4
;       2
;       3)
; ---------------------
; (iter 11 4 2 3)
; ---------------------
; (if (< 3 3)
;     11
;     (iter (+ (* 1 11)
;              (* 2 4)
;              (* 3 2))
;           11
;           4
;           (- 3 1)))
; ---------------------
; (iter 25 11 4 2))
; ---------------------
; (if (< 2 3)
;     25
;     (iter (new-a) 25 11 (- 2 1))))
; ---------------------
; 25
; ---------------------
;
; check that both produce the same results
;
(assert (= (recursive-process 5) (iterative-process 5)))

; Exercise 1.12
;
; pascals triangle
;         1
;       1   1
;     1   2   1
;   1   3   3   1
; 1   4   6   4   1
;
; or
;
; 1
; 1   1
; 1   2   1
; 1   3   3   1
; 1   4   6   4   1
;
;
; compute using recursive process
;
(define (pascal-at row column)
  (if (or (< column 1) (< row 2) (= column row))
      1
      (+ (pascal-at (- row 1) column)
         (pascal-at (- row 1) (- column 1)))))

; check it
(assert (= 1 (pascal-at 0 0)))
(assert (= 1 (pascal-at 1 0)))
(assert (= 1 (pascal-at 1 1)))
(assert (= 1 (pascal-at 2 0)))
(assert (= 2 (pascal-at 2 1)))
(assert (= 1 (pascal-at 2 2)))
(assert (= 1 (pascal-at 3 0)))
(assert (= 3 (pascal-at 3 1)))
(assert (= 3 (pascal-at 3 2)))
(assert (= 1 (pascal-at 3 3)))
(assert (= 1 (pascal-at 4 0)))
(assert (= 4 (pascal-at 4 1)))
(assert (= 6 (pascal-at 4 2)))
(assert (= 4 (pascal-at 4 3)))
(assert (= 1 (pascal-at 4 4)))

; 1.13

; too mathy. low value. didnt do.

; 1.14

(define (count-change amount)
  (cc amount 5))

(define (cc amount kinds-of-coins)
  (cond ((= amount 0) 1)
        ((or (< amount 0) (= kinds-of-coins 0)) 0)
        (else (+ (cc amount
                     (- kinds-of-coins 1))
                 (cc (- amount
                        (first-denomination kinds-of-coins))
                     kinds-of-coins)))))

(define (first-denomination kinds-of-coins)
  (cond ((= kinds-of-coins 1) 1)
        ((= kinds-of-coins 2) 5)
        ((= kinds-of-coins 3) 10)
        ((= kinds-of-coins 4) 25)
        ((= kinds-of-coins 5) 50)))

(assert (= 292 (count-change 100)))

; analysis of change making for 11 cents

; (cc amount kinds-of-coins) has 2 branches that call (cc amount kinds-of-coins)
;
; the order of growth for space is O(n) because the only thing kept at each
; recursion step is the stack frame (no deferred operations, completely tail recursive)
;
; the order of growth for steps: n^2 because at each recursion 2 more steps are compounded
; ex:
; 1 recursion yields 3 steps:
;                x
;             2     2
; 2 recursions yields 7 steps:
;                x
;             2     2
;           2  2  2   2
; 3 recursions yields 15 steps:
;                      x
;               2             2
;           2       2     2       2
;         2  2    2  2   2  2    2  2

(assert (= 4 (count-change 11)))

; 1.15 - 1.19
;
; All of these were too mathy/analytical. Didnt do them.


; 1.20

(define (gcd a b)
  (if (= b 0)
      a
      (gcd b (remainder a b))))

; normal-order evaluation of (gcd 206 40):
;
; (gcd 206 40)
; --------------------------
; expand 'gcd'
;
; (if (= 40 0)
;     206
;     (gcd 40 (remainder 206 40)))
; --------------------------
; evaluate 'if'
; (= 40 0) is #f so take 'else'
;
; (gcd 40 (remainder 206 40))
; --------------------------
; expand 'gcd'
;
; (if (= (remainder 206 40) 0)
;     40
;     (gcd (remainder 206 40) (remainder 40 (remainder 206 40))))
; --------------------------
; evaluate 'remainder'
;
; (if (= 6 0)
;     40
;     (gcd (remainder 206 40) (remainder 40 (remainder 206 40))))
; --------------------------
; (= 6 0) is #f so take 'else'
;
; (gcd (remainder 206 40) (remainder 40 (remainder 206 40)))
; --------------------------
; expand 'gcd'
;
; (if (= (remainder 40 (remainder 206 40)) 0)
;     (remainder 206 40)
;     (gcd (remainder 40 (remainder 206 40)) (remainder (remainder 206 40) (remainder 40 (remainder 206 40))))))
; --------------------------
; evaluate the 'remainder' calls in 'if'
;
; (if (= 4 0)
;     (remainder 206 40)
;     (gcd (remainder 40 (remainder 206 40)) (remainder (remainder 206 40) (remainder 40 (remainder 206 40))))))
; --------------------------
; (= 4 0) is #f so take 'else'
;
; (gcd (remainder 40 (remainder 206 40)) (remainder (remainder 206 40) (remainder 40 (remainder 206 40))))
; --------------------------
; expand 'gcd'
;
; (if (= (remainder (remainder 206 40) (remainder 40 (remainder 206 40))) 0)
;     (remainder 40 (remainder 206 40))
;     (gcd (remainder (remainder 206 40) (remainder 40 (remainder 206 40))) (remainder (remainder 40 (remainder 206 40)) (remainder (remainder 206 40) (remainder 40 (remainder 206 40))))))
; --------------------------
; evaluate the 'remainder' calls in 'if'
;
; (if (= 2 0)
;     (remainder 40 (remainder 206 40))
;     (gcd (remainder (remainder 206 40) (remainder 40 (remainder 206 40))) (remainder (remainder 40 (remainder 206 40)) (remainder (remainder 206 40) (remainder 40 (remainder 206 40))))))
; --------------------------
; (= 2 0) is #f so take 'else'
;
; (gcd (remainder (remainder 206 40) (remainder 40 (remainder 206 40))) (remainder (remainder 40 (remainder 206 40)) (remainder (remainder 206 40) (remainder 40 (remainder 206 40)))))
; --------------------------
; expand 'gcd'
;
; (if (= (remainder (remainder 40 (remainder 206 40)) (remainder (remainder 206 40) (remainder 40 (remainder 206 40)))) 0)
;     (remainder (remainder 206 40) (remainder 40 (remainder 206 40)))
;     (gcd (remainder (remainder 40 (remainder 206 40)) (remainder (remainder 206 40) (remainder 40 (remainder 206 40)))) (remainder (remainder (remainder 206 40) (remainder 40 (remainder 206 40))) (remainder (remainder 40 (remainder 206 40)) (remainder (remainder 206 40) (remainder 40 (remainder 206 40)))))))
; --------------------------
; evaluate the 'remainder' calls in 'if'
;
; (if (= 0 0)
;     (remainder (remainder 206 40) (remainder 40 (remainder 206 40)))
;     (gcd (remainder (remainder 40 (remainder 206 40)) (remainder (remainder 206 40) (remainder 40 (remainder 206 40)))) (remainder (remainder (remainder 206 40) (remainder 40 (remainder 206 40))) (remainder (remainder 40 (remainder 206 40)) (remainder (remainder 206 40) (remainder 40 (remainder 206 40)))))))
; --------------------------
; (= 0 0) is #t so take 'then'
;
; (remainder (remainder 206 40) (remainder 40 (remainder 206 40)))
; --------------------------
; evaluate the 'remainder' calls
;
; 2
; --------------------------
;
; 18 total calls to (remainder a b) were evaluated for normal-order evaluation

(define (gcd a b)
  (if (= b 0)
      a
      (gcd b (remainder a b))))

; applicative-order evaluation of (gcd 206 40):
;
; (gcd 206 40)
; --------------------------
; no operands to evaluate, expand
;
; (if (= 40 0)
;     206
;     (gcd 40 (remainder 206 40)))
; --------------------------
; operands to evaluate
;
; (if (= 40 0)
;     206
;     (if (= 6 0)
;         40
;         (gcd 6 (remainder 40 6))))
;
; TODO .........
