import numpy as np
import pandas as pd

input_file='data.csv'

df = pd.read_csv(input_file, header = 0)
numeric_headers = list(df.columns.values)
#3 age
#4 gender
#9 chest pain
#18 history of heart disease
#33 is resting heart rate; show how to find it out
columns = ['3','4','9','18','33']
answers = ['58']

test = df[['9','58']]
print(test)
# Choose features from the list
# Make a new array with the selected features and their labels

featuresArr= df[columns]
answersArr = df[answers]
answersArr = answersArr.applymap(lambda x: 1 if x > 0 else 0)
trainingLabels = featuresArr[:200]
trainingAnswers = answersArr[:200]
testLabels = featuresArr[200:]
testAnswers = answersArr[200:]


#the pickel
from sklearn import tree

clf = tree.DecisionTreeClassifier(min_samples_split=15)
clf = clf.fit(trainingLabels, trainingAnswers)

print(clf.score(testLabels, testAnswers))
pred_array = [['67','1','4','1','78']]
#[40,1,1,1,200]
print(clf.predict(pred_array)[0])

#import pickle
#
## save
#with open('model.pkl','wb') as f:
#    pickle.dump(clf,f)
#
#with open('model.pkl', 'rb') as f:
#    clf2 = pickle.load(f)
#    print(clf.score(testLabels, testAnswers))

#clf2.predict(X[0:1])
#https://archive.ics.uci.edu/ml/datasets/heart+disease