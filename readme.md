stations pluggins
band bassfilter

input output
soundwave,ul,lm soundwave
[13,3,2,5], 10, 5 [10,5,5,5]

soundwave {
if >= ul
return ul
if <= lm
return lm
}
