var temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp
                j--;
                i++;
                runner = true;
            