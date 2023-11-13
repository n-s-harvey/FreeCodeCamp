#include <iostream>
#include <chrono>
#include <string>
#include <fstream>
#include <map>
#include <vector>

using namespace std;
int main()
{

    string FILEPATH = "./words_alpha.txt";

    string line;

    vector<string> vectorWords;
    chrono::time_point<chrono::steady_clock> start_time, end_time;

    start_time = chrono::steady_clock::now();
    ifstream file(FILEPATH);

    while (getline(file, line))
    {
        vectorWords.push_back(line);
    }

    end_time = chrono::steady_clock::now();
    chrono::duration<double, milli> elapsed_time = end_time - start_time;

    cout << "Loading the words took " << elapsed_time.count() << "ms by getline().\n";

    // ! GETLINE ABOVE

    vector<string> secondVectorWords;
    start_time = chrono::steady_clock::now();

    ifstream secondFile(FILEPATH);

    while (secondFile)
    {
        secondFile >> line;
        secondVectorWords.push_back(line);
    }

    end_time = chrono::steady_clock::now();

    elapsed_time = end_time - start_time;

    cout << "Loading the words took " << elapsed_time.count() << "ms by stream extraction. \n";

    // ! STREAM EXTRACTION ABOVE

    map<int, int> wordSizes;

    start_time = chrono::steady_clock::now();

    for (int i = 0; i < vectorWords.size(); i++)
    {
        int wordSize = vectorWords.at(i).size();
        if (wordSizes.count(wordSize) == 0)
        {
            wordSizes[wordSize] = 1;
        }

        else
        {
            wordSizes[wordSize] += 1;
        }
    }

    end_time = chrono::steady_clock::now();

    elapsed_time = end_time - start_time;

    cout << "Loading the map took " << elapsed_time.count() << "ms. \n";
}