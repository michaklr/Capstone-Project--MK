package de.michaklr.backend.service;

import de.michaklr.backend.Dto.AnswersDto;
import de.michaklr.backend.Dto.ResultAnswers;
import org.springframework.stereotype.Service;

@Service
public class SurveyAnswerService {

    public ResultAnswers evaluateAnswers(AnswersDto answersDto) {

        ResultAnswers results = new ResultAnswers();

        int depressionsLevel = 0;
        if (answersDto.getAnswer_0().equals("Trifft kaum zu")) {
            depressionsLevel += 1;
        }
        if (answersDto.getAnswer_0().equals("Trifft ziemlich zu")) {
            depressionsLevel += 2;
        }
        if (answersDto.getAnswer_0().equals("Trifft deutlich zu")) {
            depressionsLevel += 3;
        }
        if (answersDto.getAnswer_0().equals("Trifft extrem zu")) {
            depressionsLevel += 4;
        }


        if (answersDto.getAnswer_1().equals("Trifft kaum zu")) {
            depressionsLevel += 1;
        }
        if (answersDto.getAnswer_1().equals("Trifft ziemlich zu")) {
            depressionsLevel += 2;
        }
        if (answersDto.getAnswer_1().equals("Trifft deutlich zu")) {
            depressionsLevel += 3;
        }
        if (answersDto.getAnswer_1().equals("Trifft extrem zu")) {
            depressionsLevel += 4;
        }


        if (answersDto.getAnswer_2().equals("Trifft kaum zu")) {
            depressionsLevel += 1;
        }
        if (answersDto.getAnswer_2().equals("Trifft ziemlich zu")) {
            depressionsLevel += 2;
        }
        if (answersDto.getAnswer_2().equals("Trifft deutlich zu")) {
            depressionsLevel += 3;
        }
        if (answersDto.getAnswer_2().equals("Trifft extrem zu")) {
            depressionsLevel += 4;
        }


        if (answersDto.getAnswer_3().equals("Trifft kaum zu")) {
            depressionsLevel += 1;
        }
        if (answersDto.getAnswer_3().equals("Trifft ziemlich zu")) {
            depressionsLevel += 2;
        }
        if (answersDto.getAnswer_3().equals("Trifft deutlich zu")) {
            depressionsLevel += 3;
        }
        if (answersDto.getAnswer_3().equals("Trifft extrem zu")) {
            depressionsLevel += 4;
        }

        int depressionsScore = depressionsLevel / 4;
        if (depressionsScore <= 0.75) {
            results.setDepressionResult("Ihre Beantwortung der Fragen weist auf eine sehr geringe Symptombelastung im Bereich Depression hin. ");
        } else if (depressionsScore > 0.75 && depressionsScore <= 1) {
            results.setDepressionResult("Ihre Beantwortung der Fragen weist auf eine geringe Symptombelastung im Bereich Depression hin. ");
        } else if (depressionsScore == 2) {
            results.setDepressionResult("Ihre Beantwortung der Fragen weist auf eine mittlere Symptombelastung im Bereich Depression hin. \n Ein Gespräch mit einem Psychotherapeuten wird angeraten. ");
        } else if (depressionsScore == 3) {
            results.setDepressionResult("Ihre Beantwortung der Fragen weist auf eine schwere Symptombelastung im Bereich Depression hin. \n Ein Gespräch mit einem Psychotherapeuten wird dringend angeraten. ");
        }

        int angstLevel = 0;
        if (answersDto.getAnswer_4().equals("Trifft kaum zu")) {
            angstLevel += 1;
        }
        if (answersDto.getAnswer_4().equals("Trifft ziemlich zu")) {
            angstLevel += 2;
        }
        if (answersDto.getAnswer_4().equals("Trifft deutlich zu")) {
            angstLevel += 3;
        }
        if (answersDto.getAnswer_4().equals("Trifft extrem zu")) {
            angstLevel += 4;
        }


        if (answersDto.getAnswer_5().equals("Trifft kaum zu")) {
            angstLevel += 1;
        }
        if (answersDto.getAnswer_5().equals("Trifft ziemlich zu")) {
            angstLevel += 2;
        }
        if (answersDto.getAnswer_5().equals("Trifft deutlich zu")) {
            angstLevel += 3;
        }
        if (answersDto.getAnswer_5().equals("Trifft extrem zu")) {
            angstLevel += 4;
        }


        if (answersDto.getAnswer_6().equals("Trifft kaum zu")) {
            angstLevel += 1;
        }
        if (answersDto.getAnswer_6().equals("Trifft ziemlich zu")) {
            angstLevel += 2;
        }
        if (answersDto.getAnswer_6().equals("Trifft deutlich zu")) {
            angstLevel += 3;
        }
        if (answersDto.getAnswer_6().equals("Trifft extrem zu")) {
            angstLevel += 4;
        }


        if (answersDto.getAnswer_7().equals("Trifft kaum zu")) {
            angstLevel += 1;
        }
        if (answersDto.getAnswer_7().equals("Trifft ziemlich zu")) {
            angstLevel += 2;
        }
        if (answersDto.getAnswer_7().equals("Trifft deutlich zu")) {
            angstLevel += 3;
        }
        if (answersDto.getAnswer_7().equals("Trifft extrem zu")) {
            angstLevel += 4;
        }


        int angstScore = angstLevel / 4;

        if (angstScore <= 0.75) {
            results.setAngstResult("Im Bereich Angst liegt eine sehr geringe Symptombelastung vor. ");
        } else if (angstScore > 0.75 && angstScore <= 1) {
            results.setAngstResult("Im Bereich Angst liegt eine geringe Symptombelastung vor. ");
        } else if (angstScore == 2) {
            results.setAngstResult("Im Bereich Angst liegt eine mittlere Symptombelastung vor. \n Wir raten Ihnen zu einem Gespräch mit einem Psychotherapeuten. ");
        } else if (angstScore == 3) {
            results.setAngstResult("Im Bereich Angst liegt eine schwere Symptombelastung vor. \n Wir raten Ihnen dringend zu einem Gespräch mit einem Psychotherapeuten. ");
        }

        int zwangLevel = 0;
        if (answersDto.getAnswer_8().equals("Trifft kaum zu")) {
            zwangLevel += 1;
        }
        if (answersDto.getAnswer_8().equals("Trifft ziemlich zu")) {
            zwangLevel += 2;
        }
        if (answersDto.getAnswer_8().equals("Trifft deutlich zu")) {
            zwangLevel += 3;
        }
        if (answersDto.getAnswer_8().equals("Trifft extrem zu")) {
            zwangLevel += 4;
        }


        if (answersDto.getAnswer_9().equals("Trifft kaum zu")) {
            zwangLevel += 1;
        }
        if (answersDto.getAnswer_9().equals("Trifft ziemlich zu")) {
            zwangLevel += 2;
        }
        if (answersDto.getAnswer_9().equals("Trifft deutlich zu")) {
            zwangLevel += 3;
        }
        if (answersDto.getAnswer_9().equals("Trifft extrem zu")) {
            zwangLevel += 4;
        }


        if (answersDto.getAnswer_10().equals("Trifft kaum zu")) {
            zwangLevel += 1;
        }
        if (answersDto.getAnswer_10().equals("Trifft ziemlich zu")) {
            zwangLevel += 2;
        }
        if (answersDto.getAnswer_10().equals("Trifft deutlich zu")) {
            zwangLevel += 3;
        }
        if (answersDto.getAnswer_10().equals("Trifft extrem zu")) {
            zwangLevel += 4;
        }

        int zwangScore = zwangLevel / 3;
        if (zwangScore <= 0.67) {
            results.setZwangResult("Im Bereich Zwänge bzw. zwanghaftes Verhalten liegt eine sehr geringe Symptombelastung vor. ");
        } else if (zwangScore > 0.67 && zwangScore <= 1.0) {
            results.setZwangResult("Im Bereich Zwänge bzw. zwanghaftes Verhalten liegt eine geringe Symptombelastung vor. ");
        } else if (zwangScore > 1.0 && zwangScore <= 2.0) {
            results.setZwangResult("Im Bereich Zwänge bzw. zwanghaftes Verhalten liegt eine sehr mittlere Symptombelastung vor. \n Wir raten Ihnen zu einem Gespräch mit einem Psychotherapeuten. ");
        } else if (zwangScore > 2.0 && zwangScore <= 3.0) {
            results.setZwangResult("Es liegen schwere Symptome vor. \n Wir raten Ihnen zu einem Gespräch mit einem Psychotherapeuten. ");
        }

        int somaLevel = 0;
        if (answersDto.getAnswer_11().equals("Trifft kaum zu")) {
            somaLevel += 1;
        }
        if (answersDto.getAnswer_11().equals("Trifft ziemlich zu")) {
            somaLevel += 2;
        }
        if (answersDto.getAnswer_11().equals("Trifft deutlich zu")) {
            somaLevel += 3;
        }
        if (answersDto.getAnswer_11().equals("Trifft extrem zu")) {
            somaLevel += 4;
        }


        if (answersDto.getAnswer_12().equals("Trifft kaum zu")) {
            somaLevel += 1;
        }
        if (answersDto.getAnswer_12().equals("Trifft ziemlich zu")) {
            somaLevel += 2;
        }
        if (answersDto.getAnswer_12().equals("Trifft deutlich zu")) {
            somaLevel += 3;
        }
        if (answersDto.getAnswer_12().equals("Trifft extrem zu")) {
            somaLevel += 4;
        }


        if (answersDto.getAnswer_13().equals("Trifft kaum zu")) {
            somaLevel += 1;
        }
        if (answersDto.getAnswer_13().equals("Trifft ziemlich zu")) {
            somaLevel += 2;
        }
        if (answersDto.getAnswer_13().equals("Trifft deutlich zu")) {
            somaLevel += 3;
        }
        if (answersDto.getAnswer_13().equals("Trifft extrem zu")) {
            somaLevel += 4;
        }

        int somaScore = somaLevel / 3;

        if (somaScore <= 0.33) {
            results.setSomaResult
                    ("Im Bereich somataforme Störung liegt eine sehr geringe Symptombelastung vor. \n " +
                            "Von einer somatoformen Störung spricht man, wenn körperliche Beschwerden wiederholt auftreten, " +
                            "über längere Zeit bestehen und sich trotz intensiver Diagnostik keine ausreichend erklärenden organischen Befunde feststellen lassen.");
        } else if (somaScore > 0.33 && somaScore <= 0.75) {
            results.setSomaResult
                    ("Im Bereich somataforme Störung liegt eine geringe Symptombelastung vor. \n" +
                            "Von einer somatoformen Störung spricht man, wenn körperliche Beschwerden wiederholt auftreten, " +
                            "über längere Zeit bestehen und sich trotz intensiver Diagnostik keine ausreichend erklärenden organischen Befunde feststellen lassen.");
        } else if (somaScore > 0.75 && somaScore <= 1.25) {
            results.setSomaResult
                    ("Im Bereich somatoforme Störung liegt mittlere Symptombelastung vor. /n Wir raten Ihnen zu einem Gespräch mit einem Psychotherapeuten. \n " +
                            "Von einer somatoformen Störung spricht man, wenn körperliche Beschwerden wiederholt auftreten, " +
                            "über längere Zeit bestehen und sich trotz intensiver Diagnostik keine ausreichend erklärenden organischen Befunde feststellen lassen. ");
        } else if (somaScore > 1.25 && somaScore <= 2.67) {
            results.setSomaResult("""
                    Im Bereich somatoforme Störung liegt eine sehr schwere Symptombelastung vor.\s
                     Wir raten Ihnen zu einem Gespräch mit einem Psychotherapeuten.\s
                    Von einer somatoformen Störung spricht man, wenn körperliche Beschwerden wiederholt auftreten, über längere Zeit bestehen und sich trotz intensiver Diagnostik keine ausreichend erklärenden organischen Befunde feststellen lassen.""");
        }

        int essVerhaltenLevel = 0;
        if (answersDto.getAnswer_14().equals("Trifft kaum zu")) {
            essVerhaltenLevel += 1;
        }
        if (answersDto.getAnswer_14().equals("Trifft ziemlich zu")) {
            essVerhaltenLevel += 2;
        }
        if (answersDto.getAnswer_14().equals("Trifft deutlich zu")) {
            essVerhaltenLevel += 3;
        }
        if (answersDto.getAnswer_14().equals("Trifft extrem zu")) {
            essVerhaltenLevel += 4;
        }


        if (answersDto.getAnswer_15().equals("Trifft kaum zu")) {
            essVerhaltenLevel += 1;
        }
        if (answersDto.getAnswer_15().equals("Trifft ziemlich zu")) {
            essVerhaltenLevel += 2;
        }
        if (answersDto.getAnswer_15().equals("Trifft deutlich zu")) {
            essVerhaltenLevel += 3;
        }
        if (answersDto.getAnswer_15().equals("Trifft extrem zu")) {
            essVerhaltenLevel += 4;
        }


        if (answersDto.getAnswer_16().equals("Trifft kaum zu")) {
            essVerhaltenLevel += 1;
        }
        if (answersDto.getAnswer_16().equals("Trifft ziemlich zu")) {
            essVerhaltenLevel += 2;
        }
        if (answersDto.getAnswer_16().equals("Trifft deutlich zu")) {
            essVerhaltenLevel += 3;
        }
        if (answersDto.getAnswer_16().equals("Trifft extrem zu")) {
            essVerhaltenLevel += 4;
        }

        int essenScore = essVerhaltenLevel / 4;

        if (essenScore <= 0.33) {
            results.setEssVerhaltenResult("Im Bereich Essstörung liegt eine sehr geringe Symptombelastung vor.");
        } else if (essenScore > 0.33 && essenScore <= 0.67) {
            results.setEssVerhaltenResult("Im Bereich Essstörung liegt eine geringe Symptombelastung vor.");
        } else if (essenScore > 0.67 && essenScore <= 1.5) {
            results.setEssVerhaltenResult("Im Bereich Essstörung liegt eine sehr mittlere Symptombelastung vor. \n Wir raten Ihnen ein Gespräch mit einem Psychotherapeuten zu führen");
        } else if (essenScore > 1.5 && essenScore <= 2.75) {
            results.setEssVerhaltenResult("Im Bereich Essstörung liegt eine schwere Symptombelastung vor. \n Wir raten Ihnen ein Gespräch mit einem Psychotherapeuten zu führen");
        }


        int konzentrationLevel = 0;

        if (answersDto.getAnswer_17().equals("Trifft kaum zu")) {
            konzentrationLevel += 1;

        }
        if (answersDto.getAnswer_17().equals("Trifft ziemlich zu")) {
            konzentrationLevel += 2;

        }
        if (answersDto.getAnswer_17().equals("Trifft deutlich zu")) {
            konzentrationLevel += 3;

        }
        if (answersDto.getAnswer_17().equals("Trifft extrem zu")) {
            konzentrationLevel += 4;

        }

        int konzentrationScore = konzentrationLevel;

        if (konzentrationScore >= 2) {
            results.setKonzentrationResult("Ihre Konzentrationsfähigkeit scheint geschwächt zu sein. Sie sollten die Ursachen mit einem Psychotherapeuten oder Arzt besprechen. ");
        }


        int suizidLevel = 0;


        if (answersDto.getAnswer_18().equals("Trifft kaum zu")) {
            suizidLevel += 1;

        }
        if (answersDto.getAnswer_18().equals("Trifft ziemlich zu")) {
            suizidLevel += 2;

        }
        if (answersDto.getAnswer_18().equals("Trifft deutlich zu")) {
            suizidLevel += 3;

        }
        if (answersDto.getAnswer_18().equals("Trifft extrem zu")) {
            suizidLevel += 4;

        }

        int suizidScore = suizidLevel;
        if (suizidScore > 1) {
            results.setSuizidResult("Es liegen lebensmüde oder suizidale Gedanken vor. Sollten diese intensiv und aufdrängend sein, sollten Sie umgehend an einem psychiatrischen Krankenhaus vorstellig werden. Dort kann Ihnen sofort geholfen werden! ");
        }


        int schlafLevel = 0;

        if (answersDto.getAnswer_19().equals("Trifft kaum zu")) {
            schlafLevel += 1;

        }
        if (answersDto.getAnswer_19().equals("Trifft ziemlich zu")) {
            schlafLevel += 2;

        }
        if (answersDto.getAnswer_19().equals("Trifft deutlich zu")) {
            schlafLevel += 3;

        }
        if (answersDto.getAnswer_19().equals("Trifft extrem zu")) {
            schlafLevel += 4;

        }

        int schlafScore = schlafLevel;

        if (schlafScore > 2) {
            results.setSchlafResult("Sie scheinen Probleme zu haben ein bzw. durchzuschlafen. Die Ursachen können körperlicher oder psychischer Natur sein und sollten mit einem Arzt oder Psychotherapeuten besprochen werden");
        }


        int appetitLevel = 0;


        if (answersDto.getAnswer_20().equals("Trifft kaum zu")) {
            appetitLevel += 1;

        }
        if (answersDto.getAnswer_20().equals("Trifft ziemlich zu")) {
            appetitLevel += 2;

        }
        if (answersDto.getAnswer_20().equals("Trifft deutlich zu")) {
            appetitLevel += 3;

        }
        if (answersDto.getAnswer_20().equals("Trifft extrem zu")) {
            appetitLevel += 4;

        }

        int appetitScore = appetitLevel;
        if (appetitScore > 1) {
            results.setAppetitResult("Sie scheinen unter Appetitlosigkeit zu leiden. Die Ursachen können körperlicher oder psychischer Natur sein und sollten mit einem Arzt oder Psychotherapeuten besprochen werden. ");
        }


        int merkLevel = 0;

        if (answersDto.getAnswer_21().equals("Trifft kaum zu")) {
            merkLevel += 1;

        }
        if (answersDto.getAnswer_21().equals("Trifft ziemlich zu")) {
            merkLevel += 2;

        }
        if (answersDto.getAnswer_21().equals("Trifft deutlich zu")) {
            merkLevel += 3;

        }
        if (answersDto.getAnswer_21().equals("Trifft extrem zu")) {
            merkLevel += 4;

        }
        int merkScore = merkLevel;
        if (merkScore > 1) {
            results.setMerkResult("Ihr Erinnerungsvermögen scheint belastet zu sein. Die Ursachen können körperlicher oder psychischer Natur sein und sollten mit einem Arzt oder Psychotherapeuten besprochen werden. ");
        }


        int traumaLevel = 0;

        if (answersDto.getAnswer_22().equals("Trifft kaum zu")) {
            traumaLevel += 1;

        }
        if (answersDto.getAnswer_22().equals("Trifft ziemlich zu")) {
            traumaLevel += 2;

        }
        if (answersDto.getAnswer_22().equals("Trifft deutlich zu")) {
            traumaLevel += 3;

        }
        if (answersDto.getAnswer_22().equals("Trifft extrem zu")) {
            traumaLevel += 4;

        }
        int traumaScore = traumaLevel;
        if (traumaScore > 1) {
            results.setTraumaResult("Es liegen belastende post-traumatische Erlebnisse vor. Wir empfehlen Ihnen dringend einen Psychotherapeuten zu konsultieren.");
        }

        int schicksalLevel = 0;

        if (answersDto.getAnswer_23().equals("Trifft kaum zu")) {
            schicksalLevel += 1;

        }
        if (answersDto.getAnswer_23().equals("Trifft ziemlich zu")) {
            schicksalLevel += 2;

        }
        if (answersDto.getAnswer_23().equals("Trifft deutlich zu")) {
            schicksalLevel += 3;

        }
        if (answersDto.getAnswer_23().equals("Trifft extrem zu")) {
            schicksalLevel += 4;

        }

        int schicksalScore = schicksalLevel;
        if (schicksalScore > 1) {
            results.setSchicksalResult("Sie scheinen in Ihrem Leben mit schweren Schicksalsschlägen konfrontiert zu sein. Ein Gespräch mit einem Psychotherapeuten hilft diese negativen Erfahrungen besser zu verstehen und zu verarbeiten. ");
        }


        int bodyLevel = 0;

        if (answersDto.getAnswer_24().equals("Trifft kaum zu")) {
            bodyLevel += 1;

        }
        if (answersDto.getAnswer_24().equals("Trifft ziemlich zu")) {
            bodyLevel += 2;

        }
        if (answersDto.getAnswer_24().equals("Trifft deutlich zu")) {
            bodyLevel += 3;

        }
        if (answersDto.getAnswer_24().equals("Trifft extrem zu")) {
            bodyLevel += 4;

        }

        int bodyScore = bodyLevel;
        if (bodyScore > 1) {
            results.setBodyResult(" Sie empfinden Ihre Gefühle und Erfahrungen nicht mehr als Ihre eigenen. Häufig äußern sich derartige Symptome bei einer Dissoziationsstörung. Ein Gespräch mit einem Psychotherapeuten wird dringend angeraten.");
        }


        int umgebungLevel = 0;

        if (answersDto.getAnswer_25().equals("Trifft kaum zu")) {
            umgebungLevel += 1;

        }
        if (answersDto.getAnswer_25().equals("Trifft ziemlich zu")) {
            umgebungLevel += 2;

        }
        if (answersDto.getAnswer_25().equals("Trifft deutlich zu")) {
            umgebungLevel += 3;

        }
        if (answersDto.getAnswer_25().equals("Trifft extrem zu")) {
            umgebungLevel += 4;

        }

        int umgebungScore = umgebungLevel;
        if (umgebungScore > 1) {
            results.setUmgebungResult("Sie empfinden Ihre Umgebung als unwirklich, wie weit weg oder surreal. Häufig äußern sich derartige Symptome bei einer Dissoziationsstörung. Ein Gespräch mit einem Psychotherapeuten wird dringend angeraten");
        }


        int verlangenLevel = 0;

        if (answersDto.getAnswer_26().equals("Trifft kaum zu")) {
            verlangenLevel += 1;

        }
        if (answersDto.getAnswer_26().equals("Trifft ziemlich zu")) {
            verlangenLevel += 2;

        }
        if (answersDto.getAnswer_26().equals("Trifft deutlich zu")) {
            verlangenLevel += 3;

        }
        if (answersDto.getAnswer_26().equals("Trifft extrem zu")) {
            verlangenLevel += 4;

        }

        int verlangenScore = verlangenLevel;
        if (verlangenScore > 1) {
            results.setVerlangenResult("Im Bereich der Sexualität ist eine stärkere Symptombelastung erkennbar. Sollte die Ausübung Ihrer Sexualität Ihren Lebensalltag und Ihr Wohlergehen stark beeinflussen, raten wir zu einem Gespräch mit einem Psychotherapeuten. ");
        }


        int verletzungLevel = 0;

        if (answersDto.getAnswer_27().equals("Trifft kaum zu")) {
            verletzungLevel += 1;

        }
        if (answersDto.getAnswer_27().equals("Trifft ziemlich zu")) {
            verletzungLevel += 2;

        }
        if (answersDto.getAnswer_27().equals("Trifft deutlich zu")) {
            verletzungLevel += 3;

        }
        if (answersDto.getAnswer_27().equals("Trifft extrem zu")) {
            verletzungLevel += 4;

        }
        int verletzungScore = verletzungLevel;
        if (verletzungScore > 1) {
            results.setVerletzungResult("Im Bereich extreme Belastungen, die sich auf Ihre Persönlichkeit auswirken, liegt eine verstärkte Symptombelastung vor. Wir raten zu einem Gespräch mit einem Psychotherapeuten. ");
        }


        int vorliebeLevel = 0;

        if (answersDto.getAnswer_28().equals("Trifft kaum zu")) {
            vorliebeLevel += 1;

        }
        if (answersDto.getAnswer_28().equals("Trifft ziemlich zu")) {
            vorliebeLevel += 2;

        }
        if (answersDto.getAnswer_28().equals("Trifft deutlich zu")) {
            vorliebeLevel += 3;

        }
        if (answersDto.getAnswer_28().equals("Trifft extrem zu")) {
            vorliebeLevel += 4;

        }

        int vorliebeScore = vorliebeLevel;
        if (vorliebeScore > 1) {
            results.setVorliebeResult("Im Bereich der Sexualität ist eine stärkere Symptombelastung erkennbar. Sollte die Ausübung Ihrer Sexualität Ihren Lebensalltag und Ihr Wohlergehen stark beeinflussen, raten wir zu einem Gespräch mit einem Psychotherapeuten. ");

        }

        return results;
    }
}
