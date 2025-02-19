CSS    cascade    style sheet

<tagname>Content</tagname>


definire uno stile (come vengono mostrati - presentati) l'elemento HTML
cascade -> dall'alto verso il basso

Il browser applica uno style di default

Possiamo applicare il CSS in 3 modi diversi:
- in maniera inline attrverso l'attributo style
- in maniera embedded
- file esterno

Separation of Concerns



ALT GR + SHIFT + è su Windows

selettore {
    proprietà: valore;
    proprietà: valore;
    proprietà: valore;
}


selettori (in ordine decrescente di specificità):
1) universal selector * (meno specifico cioè più generico)
2) tag selector
3) class selector .nomeDellaClasse
4) id selector #Id
5) attributo style  (più specifico)



valori per i colori:
- named colors
- rgb(rr, gg, bb) funzione CSS con rr, gg, bb da 0 a 255, rgba()    alpha da 0.0 a 1.0
- #RRGGBB con RR, GG, BB da 0 a FF, #RRGGBBAA con AA da 0 a FF




font-weight (da 100 a 900):
- 100   thin
- 300   light
- 400   regular
- 700   bold
- 900   bolder 





material design:
- primary color (freddo)
- primary dark color
- accent color (caldo)

colori testi:
scale di grigio (bianco e nero inclusi)

visual design:




unità di misura:
- assolute px
- relative 

tra le unità di misura relative troviamo:
%       rispetto alla width dell'elemento parent
vw vh   viewport width viewport height


# Esercizio
Prendendo ispirazione da un blog di ricette già esistente (ad esempio Giallo Zafferano):
- utilizzare due font (presi da Google Fonts - uno per tutti gli elementi ed uno per gli headings tag)
- applicare dei colori (sia sul il testo sia sul background dell'elemento)
prestando particolare attenzione alla specificità dei selettori!







