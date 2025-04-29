#include <iostream>
#include <variant>
#include <cmath>

using namespace std;

int binary_search(int val[], int arr_size, int target){
	
	int start = 0;
	int end = arr_size;
	
	while(start <= end){
		int middle = (start + end) / 2;
		if(middle == target){return middle - 1;}
		if(target > middle){ start = middle + 1; }
		if(target < middle){ end = middle - 1; }
	}
	return -1;
}

int main() {
	int values[]{1, 2, 3, 4, 5, 6, 7, 8, 9};
	int arr_size = sizeof(values) / sizeof(values[0]);
	int target = 6;
	cout << binary_search(values, arr_size, target);
    return 0;
}




