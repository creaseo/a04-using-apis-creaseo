# a04-using-apis-creaseo
COMP426 Spring 24, optional extra credit assignment

## Simple Dictionary
This application is designed to be a very simple dictionary which allows a user to input a word to search, and then the application will use 3 third party APIs to retrieve a definition of the search word, related synonyms, and a related image.

## APIs Used

1. **Dictionary API** - To fetch definitions
   - [DictionaryAPI](https://dictionaryapi.dev/)
2. **Datamuse API** - To fetch synonyms
   - [Datamuse API Documentation](https://www.datamuse.com/api/)
3. **Unsplash API** - To fetch images
   - [Unsplash API Documentation](https://unsplash.com/documentation)

## Other notes

Use of Dictionary API and Datamuse API were free and did not require me to sign up for any API keys or such. Unsplash however required me to sign up and create an API access key. Due to having no backend in this small project and its small scale, I have decided to just keep my access key directly within the dictionary.js file. I have decided to do this for simplicity for the sake of myself and the graders and understand that for projects with greater risk and vulnerability that this is absolutely not best practice. Please let me know if there is an issue or something else I should know. Thank you for your time.