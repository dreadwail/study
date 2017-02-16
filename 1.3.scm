; 1.30

(define (cube x) (* x x x))

; i renamed 'term' to 'func' to make more sense to myself
(define (sum func a next b)
  (if (> a b)
      0
      (+ (func a)
         (sum func (next a) next b))))

(define (inc x) (+ x 1))

(define (sum-of-cubes start finish)
  (sum cube start inc finish))

(assert (= 3025 (sum-of-cubes 0 10)))

; rewrite as iterative

(define (sum-iterative func a next b)
  (define (iter current result)
    (if (> current b)                ; if we have gone past the last
        result                       ; then return the result already calculated
        (iter (next current) (+ (func current) result))))   ; otherwise run func and add to result, continue iter
  (iter a 0))   ; start at left-most with a result starting at 0

(define (sum-of-cubes-iterative start finish)
  (sum-iterative cube start inc finish))

(assert (= (sum-of-cubes-iterative 0 10) (sum-of-cubes 0 10)))

