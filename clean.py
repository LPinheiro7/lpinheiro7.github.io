import csv

def clean_second_column(input_file, output_file):
    with open(input_file, 'r', newline='', encoding='utf-8') as infile:
        # Read while preserving original formatting
        lines = infile.readlines()
    
    with open(output_file, 'w', newline='', encoding='utf-8') as outfile:
        writer = csv.writer(outfile, quoting=csv.QUOTE_MINIMAL)
        
        for line in lines:
            # Split while preserving quoted fields
            row = next(csv.reader([line]))
            if len(row) >= 2:
                row[1] = row[1].rstrip()  # Only strip trailing spaces from 2nd column
            writer.writerow(row)

# Example usage
clean_second_column('guests.csv', 'cleaned.csv')
print("Trailing spaces removed from second column. Output saved to cleaned.csv")