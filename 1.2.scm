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
