def pig_it(text):
    words = text.split()
    new_words = []
    for word in words:
        if not word.isalpha():
            new_words.append(word)
            continue
        new_word = word[1:] + word[0] + "ay"
        new_words.append(new_word)
    response = " ".join(new_words)
    return response
    #your code here

print(pig_it('Pig latin is cool !'))

"""
DESCRIPTION:
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pig_it('Pig latin is cool') # igPay atinlay siay oolcay
pig_it('Hello world !')     # elloHay orldway !
"""