            var respecterCasse = true;
						var ignorerCasse = false;
            var motsEntiers = true;
            var touteSousChaine = false;

            function rechercher(cible, terme, respecterCasse, motSeulement)
                {
                var ind = 0;

                var suivant = 0;

                if (!respecterCasse)
                    {
                    terme = terme.toLowerCase();

                    cible = cible.toLowerCase();
                    }

                while ((ind = cible.indexOf(terme, suivant)) >= 0)
                    {
                    if (motSeulement)
                        {
                        var avant = ind - 1;

                        var apres = ind + terme.length;

                        if (!(espace(cible.charAt(avant)) && espace(cible.charAt(apres))))
                            {
                            suivant = ind + terme.length;

                            continue;
                            }
                        }

                    return true;
                    }

                return false;
                }

            function remplacer(cible, ancienTerme, nouveauTerme, respecterCasse, motSeulement)
                {
                var travail = cible;

                var ind = 0;

                var suivant = 0;

                if (!respecterCasse)
                    {
                    ancienTerme = ancienTerme.toLowerCase();

                    travail = cible.toLowerCase();
                    }

                while ((ind = travail.indexOf(ancienTerme, suivant)) >= 0)
                    {
                    if (motSeulement)
                        {
                        var avant = ind - 1;

                        var apres = ind + ancienTerme.length;

                        if (!(espace(travail.charAt(avant)) && espace(travail.charAt(apres))))
                            {
                            suivant = ind + ancienTerme.length;

                            continue;
                            }
                        }

                    cible = cible.substring(0, ind) + nouveauTerme
                                + cible.substring(ind + ancienTerme.length, cible.length);

                    travail = travail.substring(0, ind) + nouveauTerme
                                  + travail.substring(ind + ancienTerme.length, travail.length);

                    suivant = ind + nouveauTerme.length;

                    if (suivant >= travail.length)
                        {
                        break;
                        }
                    }

                return cible;
                }

            function espace(check)
                {
                var espace = " ,/<>?!`';:%^&()=|{}" + '"' + "\\\n\t";

                for (var i = 0; i < espace.length; i++)
                    if (check == espace.charAt(i))
                        {
                        return true;
                        }

                if (check == "")
                    {
                    return true;
                    }

                if (check == null)
                    {
                    return true;
                    }

                return false;
                }


            // STOP HIDING -->

            function creerMatrice(num)
                {
                for (var i = 1; i <= num; i++)
                    this[i] = "";

                this.length = num;
                }

            var MORSE = new creerMatrice(26 + 6 + 11);

            var AVIATION = new creerMatrice(26 + 6 + 11);

            MORSE[01] = "·－"

            MORSE[02] = "－···"

            MORSE[03] = "－·－·"

            MORSE[04] = "－··"

            MORSE[05] = "·"

            MORSE[06] = "··－·"

            MORSE[07] = "－－·"

            MORSE[08] = "····"

            MORSE[09] = "··"

            MORSE[10] = "·－－－"

            MORSE[11] = "－·－"

            MORSE[12] = "·－··"

            MORSE[13] = "－－"

            MORSE[14] = "－·"

            MORSE[15] = "－－－"

            MORSE[16] = "·－－·"

            MORSE[17] = "－－·－"

            MORSE[18] = "·－·"

            MORSE[19] = "···"

            MORSE[20] = "－"

            MORSE[21] = "··－"

            MORSE[22] = "···－"

            MORSE[23] = "·－－"

            MORSE[24] = "－··－"

            MORSE[25] = "－·－－"

            MORSE[26] = "－－··"

            MORSE[27] = "－·－··"
            MORSE[28] = "－－·－·"
            MORSE[29] = "－－－－"
            MORSE[30] = "·－－－·"
            MORSE[31] = "···－·"
            MORSE[32] = "··－－"

            MORSE[33] = "－－－－－"
            MORSE[34] = "·－－－－"
            MORSE[35] = "··－－－"
            MORSE[36] = "···－－"
            MORSE[37] = "····－"
            MORSE[38] = "·····"
            MORSE[39] = "－····"
            MORSE[40] = "－－···"
            MORSE[41] = "－－－··"
            MORSE[42] = "－－－－·"
            MORSE[43] = "·－·－·－"
            CARACTERES = "ABCDEFGHIJKLMNOPQRSTUVWXYZ[@*]$#0123456789."

            function CODE(LETTRE)
                {
                if (LETTRE == " ")
                    {
                    return " "
                    }

                for (tg = 0; tg <= 26 + 6 +11; tg++)
                    {
                    var LT = CARACTERES.charAt(tg)

                    if (LT == LETTRE)
                        {
                        return MORSE[tg + 1]
                        }
                    }

                return ""
                }

            function MOSIGO(aaa)
                {
                var text = aaa

                text = text.toUpperCase()

                var MSG = ""

                var LTR = ""

                NUM = text.length

                for (t = 0; t <= NUM - 1; t++)
                    {
                    if (text.charAt(t) == '^')
                        {
                        LTR = text.charAt(++t)

                        switch (LTR)
                            {
                            case 'C':
                            case 'c':
                                LTR = "[";

                                break;

                            case 'G':
                            case 'g':
                                LTR = "@";

                                break;

                            case 'H':
                            case 'h':
                                LTR = "*";

                                break;

                            case 'J':
                            case 'j':
                                LTR = "]";

                                break;

                            case 'S':
                            case 's':
                                LTR = "$";

                                break;

                            case 'U':
                            case 'u':
                                LTR = "#";

                                break;
                            }
                        }

                    else
                        {
                        LTR = text.charAt(t)
                        }

                    MSG = MSG + (CODE(LTR) + " ");
                    }

                return MSG;
                }

            function MOSIUNGO(aaa)
                {
                var text = aaa

                text = text.toUpperCase()

                var MSG = text + " "

                for (th = 0; th <= 25 + 6 + 11; th++)
                    {
                    AA = MORSE[th + 1]

                    BB = CARACTERES.charAt(th)

                    MSG = remplacer(MSG, AA, BB, false, true)
                    }

                MSG = remplacer(MSG, "  ", "%")

                MSG = remplacer(MSG, " ", "")

                MSG = remplacer(MSG, "%", " ")

                return MSG;
                }