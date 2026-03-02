# Portfolio - Jacopo Lerro

Questo è il tuo portfolio personale. È stato costruito per riflettere le tue ambizioni nell'ingegneria per la medicina digitale con un tema scuro, professionale ed esotico.

## Come visualizzarlo sul tuo PC

1. Fai doppio clic sul file `index.html` per aprirlo direttamente nel tuo browser.
2. (Opzionale) Se usi Visual Studio Code, puoi installare l'estensione **Live Server** e cliccare "Go Live" per un'esperienza di sviluppo migliore se decidi di modificare il codice.

## Come pubblicarlo su GitHub (GitHub Pages)

Per rendere il sito visibile a tutti tramite link personalizzato, segui questi passaggi:

1. Crea un account su [GitHub](https://github.com/) se non lo hai già.
2. Crea un nuovo repository sul sito chiamato `portfolio-jacopo` (lascialo pubblico, senza aggiungere il README).
3. Apri il terminale (Prompt dei comandi o PowerShell), spostati in questa cartella e inizializza Git:
   ```bash
   cd C:\Users\glerr\Desktop\portfolio-jacopo
   git init
   git add .
   git commit -m "Primo commit del mio portfolio"
   git branch -M main
   git remote add origin https://github.com/tuo-username/portfolio-jacopo.git
   git push -u origin main
   ```
   *(Ricordati di sostituire `tuo-username` con il tuo vero username di GitHub nell'URL del remote)*
4. Vai su GitHub all'interno del tuo repository appena creato -> Clicca su **Settings** (Impostazioni) in alto -> Scorri a sinistra e clicca su **Pages**.
5. Sotto "Source", seleziona il branch `main` e salva. 
6. Dopo qualche minuto, il tuo sito sarà online!

Inizia pure a sperimentare modificando il testo o giocando con i colori nel file `style.css`. Buono studio!