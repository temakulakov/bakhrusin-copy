export const transliterate = (text: string, engToRus: boolean): string => {
    const rus = "щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь".split(/ +/g);
    const eng = "shh sh ch cz yu ya yo zh `` y' e` a b v g d e z i j k l m n o p r s t u f x `".split(/ +/g);

    for (let x = 0; x < rus.length; x++) {
        const search = engToRus ? eng[x] : rus[x];
        const replacement = engToRus ? rus[x] : eng[x];
        const searchUpperCase = engToRus ? eng[x].toUpperCase() : rus[x].toUpperCase();
        const replacementUpperCase = engToRus ? rus[x].toUpperCase() : eng[x].toUpperCase();

        text = text.split(search).join(replacement);
        text = text.split(searchUpperCase).join(replacementUpperCase);
    }

    return text;
};
